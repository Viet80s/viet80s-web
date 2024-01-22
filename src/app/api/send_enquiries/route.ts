import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {
    try {
        const { name, email, phoneNumber, subject, message } = await req.json();
        console.log(name, email, phoneNumber, subject, message);

    const data = await resend.emails.send({
      from: 'Customer Enquiry <contact@viet80s.co.uk>',
      to: ['info@viet80s.co.uk'],
      subject: subject,
      text:"",
      react: EmailTemplate({ name: name, email: email, phoneNumber: phoneNumber, subject: subject, message: message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}