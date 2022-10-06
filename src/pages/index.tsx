import { Foldout } from "@components/foldout"
// import { Navbar } from "@components/Nav"
import type { NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import Head from "next/head"

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div>
        <p>you are not logged in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <h1 className="text-primary-500">ROCM Esports</h1>
          <Foldout>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores praesentium itaque quam nesciunt totam saepe natus
              reprehenderit vero quos officia aspernatur id maiores, ab
              molestiae iusto, tempora, a at? Labore, consequuntur soluta
              adipisci fugit ab ducimus quas commodi quos impedit obcaecati
              magnam iusto laborum aspernatur qui corrupti architecto
              perferendis excepturi aut voluptatem at, vero saepe! Magni sequi
              culpa accusamus, adipisci necessitatibus ipsum cum amet veniam
              exercitationem tempore dolor dolorum facere provident iste aut,
              odio illum veritatis commodi incidunt eveniet cumque iure
              voluptatum eos assumenda. Incidunt eius quae, esse rem reiciendis
              fugiat corrupti quo similique tempore nobis eum mollitia ad
              consectetur alias illo sequi delectus dolorem molestiae. Ipsam
              possimus magni consequatur eveniet ad rerum quo quae adipisci
              culpa vel iste sunt, nihil officia amet! Doloribus alias optio
              nobis ullam? Fuga officia odio nemo? Adipisci rerum beatae
              officiis repudiandae molestias consequuntur quibusdam aut, debitis
              cupiditate, culpa eligendi quaerat at. Repellat ex, soluta nemo
              architecto sequi repudiandae explicabo sapiente consequuntur aut
              deleniti natus nisi deserunt, incidunt ipsum molestiae reiciendis,
              saepe commodi voluptatum a eaque perferendis pariatur! Fugit,
              quasi ipsum. Nostrum obcaecati eum, ea laudantium amet ad tenetur
              quam sunt distinctio iusto pariatur asperiores, praesentium
              adipisci perferendis modi magni veniam. Dolorum possimus animi
              eaque.
            </p>
          </Foldout>
          <p>welcome {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </div>
    </>
  )
}

export default Home
