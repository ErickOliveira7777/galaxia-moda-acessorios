import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setMsg("❌ Preencha todos os campos!");
      return;
    }

    setMsg("✅ Mensagem enviada com sucesso!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setMsg(""), 3000);
  }

  return (
    
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>📞 Contato</h2>

      {msg && (
        <p style={{
          background: "#22c55e",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "10px"
        }}>
          {msg}
        </p>
      )}
      <div
        style={{
            background: "#111",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
        }}
        >
        <h2 style={{color: "#fff",}}>✨ Bem-vindo à Galáxia Moda e Acessórios</h2>

        <p style={{ marginTop: "10px" }}>
            Ficamos felizes em ter você aqui!   
            Se tiver dúvidas, sugestões ou precisar de ajuda com seus pedidos,
            nossa equipe está pronta para te atender.
        </p>

        <hr style={{ margin: "15px 0", borderColor: "#333" }} />

        <h3>📞 Atendimento ao Cliente</h3>

        <p>📧 Email: contato@galaxiamoda.com</p>
        <p>📱 Telefone: (31) 99999-8888</p>

        <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
            Atendimento de segunda a sexta, das 9h às 18h.
        </p>
    </div>

        <h3>📧 Envie-nos uma Mensagem !</h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Sua mensagem"
          rows="4"
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            background: "#38bdf8",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          📩 Enviar Mensagem
        </button>
      </form>
    </div>
  );
}