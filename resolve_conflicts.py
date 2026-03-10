import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Block 1: Imports
# HEAD: import { Bed, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, HeartPulse } from 'lucide-react';
# UX: import { Bed, HeartPulse, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, Loader2 } from 'lucide-react';
# Resolution: Combine them (keep Loader2 and HeartPulse).
content = re.sub(
    r'<<<<<<< HEAD\nimport \{ Bed, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, HeartPulse \} from \'lucide-react\';\n=======\nimport \{ Bed, HeartPulse, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, Loader2 \} from \'lucide-react\';\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    "import { Bed, HeartPulse, Mail, MapPin, Phone, Quote, Stethoscope, Syringe, User, MessageSquare, Building, Loader2 } from 'lucide-react';\n",
    content
)

# Block 2: sendContactEmail import
# HEAD: empty
# UX: import { sendContactEmail } from '@/ai/flows/send-contact-email';
# Resolution: Remove the import (HEAD logic)
content = re.sub(
    r'<<<<<<< HEAD\n=======\nimport \{ sendContactEmail \} from \'@/ai/flows/send-contact-email\';\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    "",
    content
)

# Block 3: Header Logo
# HEAD: <Image src="/logo.svg" alt="Genuine Hospi Logo" width={32} height={32} />
# UX: <HeartPulse className="h-7 w-7 text-primary" />
# Resolution: Keep HEAD
content = re.sub(
    r'<<<<<<< HEAD\n          <Image src="/logo.svg" alt="Genuine Hospi Logo" width=\{32\} height=\{32\} />\n=======\n          <HeartPulse className="h-7 w-7 text-primary" />\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '          <Image src="/logo.svg" alt="Genuine Hospi Logo" width={32} height={32} />\n',
    content
)

# Block 4 & 5: Contact Form Logic (Form Submit)
# HEAD: Form Submit Logic
# UX: sendContactEmail logic
# Let's replace the whole contact form block to make it easier, but let's do targeted sub if possible.

# Instead of targeted sub for large block, I will write the expected code.
# The `try` block diff is a bit complex:
content = re.sub(
    r'<<<<<<< HEAD\n      // Create a FormData object to send to FormSubmit[\s\S]*?if \(response\.ok\) \{\n=======\n      const response = await sendContactEmail\(values\);\n      if \(response\.success\) \{\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '''      // Create a FormData object to send to FormSubmit
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      if (values.phone) {
        formData.append('phone', values.phone);
      }
      formData.append('message', values.message);

      // Disable captcha for better UX
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/rohitsingh8885882@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
''',
    content
)

# Block 6: error handling
content = re.sub(
    r'<<<<<<< HEAD\n        throw new Error\(\'Failed to send email via FormSubmit\'\);\n=======\n        throw new Error\(response\.error \|\| \'An unknown error occurred\'\);\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    "        throw new Error('Failed to send email via FormSubmit');\n",
    content
)

# Block 7: empty lines
content = re.sub(
    r'<<<<<<< HEAD\n\n=======\n  \n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    "\n",
    content
)

# Block 8: Name Label
content = re.sub(
    r'<<<<<<< HEAD\n                      <FormLabel>Full Name</FormLabel>\n=======\n                      <FormLabel>Full Name <span className="text-destructive">\*</span></FormLabel>\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '                      <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>\n',
    content
)

# Block 9: Email Label
content = re.sub(
    r'<<<<<<< HEAD\n                      <FormLabel>Email Address</FormLabel>\n=======\n                      <FormLabel>Email Address <span className="text-destructive">\*</span></FormLabel>\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '                      <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>\n',
    content
)

# Block 10: Message Label
content = re.sub(
    r'<<<<<<< HEAD\n                      <FormLabel>Message</FormLabel>\n=======\n                      <FormLabel>Message <span className="text-destructive">\*</span></FormLabel>\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '                      <FormLabel>Message <span className="text-destructive">*</span></FormLabel>\n',
    content
)

# Block 11: Button Text
content = re.sub(
    r'<<<<<<< HEAD\n                  \{isSubmitting \? \'Sending\.\.\.\' : \'Send Message\'\}\n=======\n                  \{isSubmitting \? \(\n                    <>\n                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />\n                      Sending\.\.\.\n                    </>\n                  \) : \(\n                    \'Send Message\'\n                  \)\}\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '''                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
''',
    content
)

# Block 12: Footer Logo
content = re.sub(
    r'<<<<<<< HEAD\n            <Image src="/logo.svg" alt="Genuine Hospi Logo" width=\{32\} height=\{32\} />\n=======\n            <HeartPulse className="h-7 w-7 text-primary" />\n>>>>>>> origin/palette-ux-contact-form-loading-7960206055896652291\n',
    '            <Image src="/logo.svg" alt="Genuine Hospi Logo" width={32} height={32} />\n',
    content
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
