import { ButtonSample } from "@/components/button-sample";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("<ButtonSample />", () => {
    it("要素が存在するか", () => {
        render(<ButtonSample>button</ButtonSample>);

        const button = screen.getByRole("button");

        const text = screen.getByText("button");

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
    });

    it("ボタンが押された時に関数が発火するか", async () => {
        const mockFn = vi.fn();

        render(<ButtonSample onClick={mockFn}>button</ButtonSample>);

        const button = screen.getByText("button");

        await userEvent.click(button);

        expect(mockFn).toBeCalled();
    });
});
