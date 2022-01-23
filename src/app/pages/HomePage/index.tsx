import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { IntroScript } from 'app/components/IntroScript'
import { ParticlesWrapper } from 'app/components/ParticlesWrapper/Loadable'

enum Stage {
  Welcome,
  Script,
  Outro,
}

export const HomePage = () => {
  const [stage, setStage] = useState<Stage>(Stage.Script)
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="sylvia" />
      </Helmet>
      {stage === Stage.Script && (
        <IntroScript onComplete={() => setStage(Stage.Outro)} />
      )}
      <ParticlesWrapper />
    </>
  )
}
