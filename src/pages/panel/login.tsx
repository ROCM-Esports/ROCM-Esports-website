
const PanelLogin = () => {
    return (
        <section className="form-card">
            <h1>Panel Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}
export default PanelLogin