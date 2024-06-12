import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/profile.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Rafał',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Rafał. I travel and build websites from all over the world
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque magna tortor, id tempus sem tincidunt in. Fusce sed feugiat augue. Nullam in sapien urna. Aenean sollicitudin molestie nunc, et commodo metus viverra a. Pellentesque ac sem quam. Quisque massa est, condimentum eget auctor id, tincidunt at erat. Etiam nec arcu ut nunc pharetra finibus. Sed ac ipsum vel sapien pretium auctor. Pellentesque euismod eget enim quis commodo.
            </p>
            <p>
              Etiam venenatis sapien ac lectus commodo bibendum ut in dui. Vivamus vel nunc at nulla rhoncus placerat eget ac eros. Nam a vehicula mauris. Mauris leo ex, volutpat scelerisque lorem eu, pharetra facilisis lectus. Donec non mauris quis mauris maximus fermentum. Aliquam pulvinar nulla ac augue fringilla tempor. Maecenas pretium ex aliquam, placerat mauris at, porta diam. Morbi suscipit velit dignissim est ornare semper varius in sapien.
            </p>
            <p>
              Vestibulum imperdiet tellus at lacus elementum blandit. Nullam vel neque at tortor tristique tincidunt pulvinar bibendum neque. Cras tempor, sem et sollicitudin dignissim, purus libero ornare arcu, nec laoreet odio dui sit amet purus. Mauris et nisl laoreet, posuere urna nec, fringilla nulla. Nullam gravida, enim a ullamcorper blandit, quam est tincidunt metus, nec convallis sem libero non turpis.
            </p>
            <p>
              Integer nisl ante, auctor vel dignissim vel, viverra et neque. Nunc posuere blandit lectus, a euismod erat laoreet vel. Suspendisse tincidunt mi vitae consequat euismod. Maecenas cursus accumsan neque et maximus. Aliquam id dui lacinia, dignissim arcu et, facilisis felis. Integer sit amet ante et metus tempor feugiat a et odio. Suspendisse volutpat consectetur felis, eget pharetra turpis rutrum vitae.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/rafal_codes" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/rafal_codes/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/rakunn" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/rafa%C5%82-bagrowski/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:rafalbagrowski@codeream.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              rafalbagrowski@codeream.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
