import WhackAMole from '../components/WhackAMole';
import CheckboxCaptcha from '../components/CheckboxCaptcha'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <div className="relative"> */}
        <CheckboxCaptcha/>
      {/* </div> */}
    </main>
  );
}
