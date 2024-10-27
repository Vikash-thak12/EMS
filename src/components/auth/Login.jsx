import { useState } from "react"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("Email", email);
        console.log("password", password);
    }
    return (
        <section>
            <div className="flex items-center justify-center h-screen w-full">
                <div className="border rounded-2xl w-[20] p-10 flex flex-col items-center justify-center">
                    <h1 className="font-bold text-3xl">Login Page</h1>
                    <form onSubmit={handlesubmit} className="flex flex-col gap-5 w-full mt-10">
                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         type="email" className="outline-none px-5 py-2 rounded-lg bg-transparent border text-white" placeholder="Enter Email" required />
                        <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         type="password" className="outline-none px-5 py-2 rounded-lg bg-transparent border text-white" placeholder="Enter Password" required />
                        <button type="submit" className="bg-blue-500 py-2 rounded-3xl">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
