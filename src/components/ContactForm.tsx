// src\components\ContactForm.tsx

import { useState } from "react";
import style from "../components/contactform.module.css"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const submit = async () => {
  setLoading(true);

  const fd = new FormData();
  fd.append("name", form.name);
  fd.append("email", form.email);
  fd.append("message", form.message);

  try {
    const res = await fetch("https://formspree.io/f/mblqlyrv", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });

    if (res.ok) {
      location.href = "/thanks/";
    } else {
      throw new Error();
    }
  } catch {
    alert("送信に失敗しました");
    setLoading(false);
  }
};

  if (confirm) {
    return (
      <div>
        <h3>入力内容の確認</h3>

        <p>お名前: {form.name}</p>
        <p>メールアドレス: {form.email}</p>
        <p>お問い合わせ内容: {form.message}</p>

        <button onClick={submit} disabled={loading}>
          {loading ? "送信中..." : "確定して送信"}
        </button>

        <button onClick={() => setConfirm(false)}>修正する</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setConfirm(true);
      }}
    >
      <div className={style.formflex}>
        <label>お名前：</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formflex}>
        <label>メールアドレス：</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formblock}>
        <label>お問い合わせ内容</label>
        <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
        />
      </div>

      <button type="submit">入力内容を確認</button>
    </form>
  );
}