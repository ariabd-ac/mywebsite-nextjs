import { ReactNode } from 'react';
import CardLeft from '../components/CardLeft'
import CardRight from '../components/CardRight'
import Header from '../components/Header'
import Layout from '../components/Layout'

interface RightProps {
  children: ReactNode
}

export default function Home(props: RightProps) {
  const { children } = props;
  return (
    <div className="root-main-wrapper">
      <div className="root-wrapper">
        <CardLeft />
        <Layout>
          {children}
        </Layout>
      </div>
    </div>
  )
}
