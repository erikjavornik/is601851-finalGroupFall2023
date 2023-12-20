import { useRef } from 'react';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribeUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputRef.current.value,
      }),
    });

    // Handle response if needed
    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Sign-up for Exclusive Offers:
      </label>

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="email@website.com"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" value="" name="subscribe">
        Submit
      </button>
    </form>
  );
}
