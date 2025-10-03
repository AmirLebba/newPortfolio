// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      inquiryType,
      budget,
      timeline,
      message,
    }: ContactFormData = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // 4. Send confirmation email to user

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      inquiryType,
      budget,
      timeline,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(200).json({
      message: 'Message sent successfully',
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'Failed to send message',
      success: false,
    });
  }
}