const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        {`Let's Connect`}
        </h1>
      <form action="https://getform.io/f/paygneea" method='POST' encType='multipart/form-data' className='bg-white p-8 rounded-lg shadow-lg'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300' type="text" name='phone' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300' type="email" name='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300' type="text" name='subject' />
          </div>
          <div className='flex flex-col py-2 md:col-span-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#2e65ef] focus:ring-2 focus:ring-[#2e65ef] transition duration-300' rows='10' name='message'></textarea>
          </div>
        </div>
        <button className='bg-[#2e65ef] text-white mt-4 w-full p-4 rounded-lg hover:bg-[#001b5e] hover:text-white hover:shadow-md transition duration-300'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact