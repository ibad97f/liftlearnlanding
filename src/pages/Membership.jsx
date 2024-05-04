function Membership() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-left   ">
      <main class="container mx-auto py-8 px-4 text-left">
        <section class=" text-left">
          <h1 class="text-3xl font-bold mb-4">Membership Terms</h1>
          <p class="mb-4">
            Welcome to Lift&Learn! Before you subscribe, please review the
            following terms:
          </p>
          <ol class="list-decimal list-inside mb-4">
            <li class="mb-2">
              User can buy a subscription with two options:
              <ul class="list-disc list-inside pl-4">
                <li>Video-only access</li>
                <li>Full access with workout plans and videos</li>
              </ul>
            </li>
            <li class="mb-2">
              Subscribers can choose between monthly or yearly payment options.
            </li>
            <li class="mb-2">
              Subscribers have the right to cancel their membership at any time.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default Membership;
