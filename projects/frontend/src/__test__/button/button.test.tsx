import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "@/components/sample"

describe("<Button/>", () => {
    it("要素が存在するか", () => {
        render(<Button />)

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })
})
