import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2022)">
            My bread and butter and I never travel without this one. Single, the most important item in my backpack. I love it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="IntelliJ IDEA 2024">
            A development powerhouse. I really do not care about 90% of all features, but I can do remaining 10% without problems. Also: white theme for the win!
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Basically, a virtual whiteboard for all my clients. The collaboration features in this one have proven to be the real game-changer, exceeding my expectations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Trello">
            Great for managing software projects and personal stuff. Moving cards to the "DONE" column is so satisfying.
          </Tool>
          <Tool title="NordVPN">
            Obviously, I use it for testing load balancing and not watching movies and series restricted to specific countries. Also, great for banking.
          </Tool>
          <Tool title="ChatGPT">
            Everyone has their own virtual assistant, so do I. I like to consult
          </Tool>
          <Tool title="Adobe Lightroom and Photoshop">
            fantastic tools for both personal content (photos and videos) and client projects. Their advanced image optimization and visual enhancement capabilities are invaluable in front-end's developer job
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
