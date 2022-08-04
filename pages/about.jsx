import axios from 'axios'
import React from 'react'
import Person from '../components/Person'

const About = ({ users }) => {
  // useEffect(() => {
  // const [users, setUsers] = useState([])
  // const [hasMounted, setHasMounted] = useState(false)
  // // const { data, isLoading, isError, error } = useQuery('users', () => {
  // useEffect(() => {
  //   setHasMounted(true)
  //   axios
  //     .get('https://randomuser.me/api/?results=6')
  //     .then((response) => {
  //       setUsers(response.data.results)
  //       return response.data.results
  //     })
  //     .catch((error) => console.log(error))
  // }, [])
  // console.log('users: ', users)
  // })

  // })
  // console.log(data, isLoading, isError, error)
  // if (isLoading)
  //   return (
  //     <div className="h-full flex justify-center">
  //       <p>Loading</p>
  //     </div>
  //   )
  // if (isError) {
  //   console.log(error)
  //   return (
  //     <div className="h-full flex justify-center">
  //       <p>Error + {error}</p>
  //     </div>
  //   )
  // // }
  // if (!hasMounted) {
  //   return null
  // }

  return (
    <div className="p-4 md:mx-[10%] bg-gray-100 rounded-md">
      <p className="text-center text-base md:text-2xl font-bold">
        Meet The Team
      </p>
      <p className="mt-4 md:mt-8 md:mx-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla
        eget tellus gravida hendrerit sit amet nec augue. Mauris placerat erat
        tristique porttitor molestie. Duis placerat, metus vitae auctor
        porttitor, velit justo vestibulum nisl, et elementum nisi enim at odio.
        Aenean at mollis arcu, non vehicula nunc. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Nulla tempor,
        lacus a tincidunt pellentesque, leo lorem molestie urna, in bibendum mi
        eros ac dolor. Nullam eleifend est vel dui efficitur semper. Nulla est
        ante, porta eget ultrices ac, imperdiet ut lorem.
      </p>
      <p className="mt-4 md:mt-8 md:mx-10">
        Vivamus cursus nulla nisi, id efficitur tellus finibus sed. Nullam
        aliquam luctus elementum.
      </p>
      <div className="border-t-2 border-black mt-2 md:my-8"></div>
      <div className="flex flex-wrap justify-center">
        {users.map((user, index) => (
          <div key={index}>
            <Person
              picture={user.picture.large}
              gender={user.gender}
              name={
                user.name.title + ' ' + user.name.first + ' ' + user.name.last
              }
              email={user.email}
              cell={user.cell}
              nationality={user.nationality}
            />
          </div>
        ))}
      </div>
      <div className="border-b border-black my-2 md:my-8"></div>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const users = await axios
    .get('https://randomuser.me/api/?results=6')
    .then((response) => {
      return response.data.results
    })
  // const users = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },
  }
}

export default About
