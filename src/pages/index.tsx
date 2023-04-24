import { Seo } from '@/ui/components/seo/seo'
import { Typography } from '@/ui/design-system/typography/typography'
import { Button } from '@/ui/design-system/button/button'

export default function Home() {
  return (
    <>
        <Seo title="Rakotonarivo Rindra Josia" description="description..." />
        <Typography variant="caption1" component = "p">Coders Rindra</Typography>
        <div className="flex item-center gap-4 py-10">
            <Button>accent</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="outline">outline</Button>
            <Button variant="disabled">disabled</Button>
        </div>
        <div className="flex item-center gap-4 py-10">
            <Button size="small">accent</Button>
            <Button size="small" variant="secondary">secondary</Button>
            <Button size="small" variant="outline">outline</Button>
            <Button size="small" variant="disabled">disabled</Button>
        </div>
        <div className="flex item-center gap-4 py-10">
            <Button size="large">accent</Button>
            <Button size="large" variant="secondary">secondary</Button>
            <Button size="large" variant="outline">outline</Button>
            <Button size="large" variant="disabled">disabled</Button>
        </div>

		</>
  )
}
