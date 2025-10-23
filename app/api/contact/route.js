import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Log the form data to the console
    console.log('=== Contact Form Submission ===');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Company:', formData.company || 'Not provided');
    console.log('Subject:', formData.subject);
    console.log('Message:', formData.message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===============================');

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}