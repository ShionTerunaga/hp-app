import { Meta, StoryFn } from "@storybook/react"
import { Button } from "@/components/sample"

const meta = {
    title: "components/ui/Button",
    component: Button,
    parameters: {
        nextjs: {
            appDirectory: true
        }
    },
    tags: ["autodocs"]
} satisfies Meta<typeof Button>

export default meta

type Story = StoryFn<typeof meta>

/**
 * 基本的なボタン
 */
export const Basic: Story = () => {
    return <Button />
}
