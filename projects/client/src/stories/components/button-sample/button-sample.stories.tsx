import { ButtonSample } from "@/components/button-sample"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ButtonSample> = {
    title: "components/button-sample",
    component: ButtonSample
}

export default meta

type Story = StoryObj<typeof ButtonSample>

export const sample: Story = {
    args: {
        children: <>サンプル</>
    }
}
