

export default function LoginRegisterBtn(props) {
    const { buttonttl } = props
    return (
      <button type="submit" 
            className="bg-black text-white mt-2 px-10 py-2 rounded-full self-center hover:bg-violet-500 active:bg-red-500">{buttonttl}</button>
    )
}