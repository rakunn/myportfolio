"use client"

export const Form = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm) as FormData | any;

        fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log ("/thank-you/"))
            .catch((error) => alert(error));
    };

    return (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} action="/">
            <input type="hidden" name="form-name" value="contact"/>
            <p>
                <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}