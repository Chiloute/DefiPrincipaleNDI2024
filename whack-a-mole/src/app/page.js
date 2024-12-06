'use client';
import CustomCaptcha from '../components/CustomCaptcha';

export default function Home() {
  const handleVerify = (success) => {
    if (success) {
      console.log('User verified!');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <CustomCaptcha onVerify={handleVerify} />
    </main>
  );
}
