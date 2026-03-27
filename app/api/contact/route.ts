import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !company) {
      return NextResponse.json({ message: 'Nome, Email e Empresa são obrigatórios' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `🚨 Novo Lead [SafeGuard Vision] - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #E53935; border-bottom: 2px solid #E53935; padding-bottom: 10px;">Solicitação de Demonstração</h2>
          <p>Um novo lead solicitou uma demonstração técnica do <strong>SafeGuard Vision</strong>.</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00BCD4; border-radius: 4px;">
            <p style="margin: 0 0 10px 0;"><strong>👤 Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>📧 Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>🏢 Empresa:</strong> ${company}</p>
            <p style="margin: 0 0 0 0;"><strong>💬 Mensagem:</strong> ${message || '<i>Nenhuma mensagem enviada.</i>'}</p>
          </div>
          <br/>
          <p style="font-size: 0.8em; color: #888;">Mensagem gerada automaticamente pelo sistema da Landing Page.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-mail enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Erro ao processar envio do e-mail' }, { status: 500 });
  }
}
