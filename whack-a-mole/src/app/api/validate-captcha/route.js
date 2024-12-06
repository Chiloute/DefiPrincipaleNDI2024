// app/api/validate-captcha/route.js

export async function POST(req) {
    const { score, time, mouseMovements } = await req.json();
  
    // Logique de validation : ajustez ces critères selon votre besoin
    const averageSpeed = mouseMovements.reduce((acc, curr) => acc + curr.speed, 0) / mouseMovements.length;
    const timeThreshold = 20 * 1000;  // En secondes
    const scoreThreshold = 8;  // Score minimal
  
    const isSpeedValid = averageSpeed > 1; // Seuil de vitesse
    const isTimeValid = 2000 < time < timeThreshold;
    const isScoreValid = score >= scoreThreshold;

    console.log('isSpeedValid', isSpeedValid, averageSpeed);
    console.log('isTimeValid', isTimeValid, time);
    console.log('isScoreValid', isScoreValid, score);
  
    if (isSpeedValid && isTimeValid && isScoreValid) {
      return new Response(JSON.stringify({ isValid: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ isValid: false }), { status: 400 });
    }
  }
  