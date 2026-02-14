import React, { useState } from "react";
import { useLanguage } from "@/lenguajeContext/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, MessageCircle, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

// Configuración de EmailJS (reemplazar por los IDs de tu cuenta de EmailJS)
// Deja estos valores como placeholders para que puedas pegar los datos de EmailJS sin tocar el código
const EMAILJS_SERVICE_ID = 'service_x3s920o';
const EMAILJS_TEMPLATE_ID = 'template_kf1shk9';
// Nota: con @emailjs/browser ya no usamos userID en la llamada; se inicializa con el public key
const EMAILJS_PUBLIC_KEY = '1lOKicbjqqvphM5-7';

// Referencia al formulario para enviar por EmailJS
const formRef = React.createRef<HTMLFormElement>();

const ContactSection = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // No inicializamos EmailJS aquí; usaremos emailjs.sendForm con la publicKey en la llamada

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Envío real utilizando EmailJS sendForm (usa los campos del formulario DOM)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err) {
      console.error('Error enviando correo con EmailJS:', err);
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name;
    if (field === 'user_name') {
      setFormData((prev) => ({ ...prev, name: e.target.value }));
      return;
    }
    if (field === 'user_email') {
      setFormData((prev) => ({ ...prev, email: e.target.value }));
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: e.target.value } as any));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">

        {/* CTA Banner */}
        <div className="-mt-24 relative z-10 max-w-3xl mx-auto mb-44 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-brand-green/10 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t.contact.cta}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t.contact.ctaDescription}
          </p>
          <a href="#contact-form">
            <Button size="lg" className="gap-2">
              {t.contact.form.submit}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
        <div id="contact-form" className="scroll-mt-24 md:scroll-mt-32 grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Lado izquierdo - Texto e WhatsApp */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t.contact.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              {t.contact.title}
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              {t.contact.whatsapp}
            </p>

            <a
              href="https://wa.me/5493534285568"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="gap-2 bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,45%)] text-white"
              >
                <MessageCircle className="h-5 w-5" />
                {t.contact.whatsappButton}
              </Button>
            </a>
          </div>

          {/* Lado derecho - Formulario */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={formState === "sending"}
                >
                  {formState === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>

                {/* Mensajes de estado */}
                {formState === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-brand-green-light text-brand-green rounded-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{t.contact.form.success}</p>
                  </div>
                )}

                {formState === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-destructive/10 text-destructive rounded-lg">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{t.contact.form.error}</p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
