import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Nova senha — Biofy" },
      { name: "description", content: "Defina uma nova senha para sua conta Biofy." },
      { property: "og:title", content: "Nova senha — Biofy" },
      { property: "og:description", content: "Defina uma nova senha para sua conta Biofy." },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setReady(Boolean(data.session)));
    const { data } = supabase.auth.onAuthStateChange((_e, session) => setReady(Boolean(session)));
    return () => data.subscription.unsubscribe();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (password.length < 8) {
      toast.error("Use uma senha com pelo menos 8 caracteres.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast.error("Não foi possível atualizar a senha.");
      return;
    }
    toast.success("Senha atualizada!");
    navigate({ to: "/dashboard" });
  }

  return (
    <AuthShell title="Nova senha" subtitle="Escolha uma senha nova para sua conta.">
      {!ready ? (
        <p className="text-sm text-muted-foreground">
          Abra esta página pelo link enviado no seu e-mail para redefinir a senha.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Nova senha</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11"
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Salvando..." : "Salvar senha"}
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
