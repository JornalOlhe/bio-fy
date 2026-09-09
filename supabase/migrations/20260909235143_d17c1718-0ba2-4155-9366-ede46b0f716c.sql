CREATE OR REPLACE FUNCTION public.is_username_available(candidate TEXT) RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY INVOKER SET search_path = public AS $$
  SELECT candidate ~ '^[a-z0-9_.]{3,30}$'
     AND NOT EXISTS (SELECT 1 FROM public.profiles WHERE lower(username) = lower(candidate));
$$;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM anon, authenticated, PUBLIC;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM anon, authenticated, PUBLIC;