
const Profile = () => {
  return (
    <section className=" bg-gray-50 dark:bg-gray-900 flex font-medium items-center justify-center h-screen">

    <section className="w-64 mx-auto bg-white dark:bg-gray-800 rounded-2xl px-10 py-8 shadow-lg">
        <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>

        <div className="mt-8 ">
            <h2 className="dark:text-white text-gray-700 font-bold text-2xl tracking-wide">Full User <br/> Name</h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5" >
            Active
        </p>

        <div className="h-1 w-full bg-gray-200 mt-8 rounded-full">
            <div className="h-1 rounded-full w-2/5 dark:bg-yellow-500 bg-gray-500"></div>
        </div>
        <div className="mt-3 text-white text-sm">
            <span className="text-gray-400 font-semibold">Storage:</span>
            <span>40%</span>
        </div>

    </section>


</section>
  )
}

export default Profile