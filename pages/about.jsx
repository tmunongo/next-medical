import React from 'react'

const about = () => {
  const url = 'https://randomuser.me/api/'
  fetch(url)
    .then((response) => response.json)
    .catch((data) => console.log(data))

  return <div className="p-4 h-screen">Check the console</div>
}

export default about
