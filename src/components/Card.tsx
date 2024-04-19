import React, { FC } from "react";

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface ICardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children: React.ReactNode;
}

const Card: FC<ICardProps> = ({
    width,
    height,
    variant,
    children,
}) => {
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.outlined
                        ? "solid 1px black"
                        : "none",
                background:
                    variant === CardVariant.primary ? "lightgrey" : "none",
            }}
        >
            <>{children}</>
        </div>
    );
};

export default Card;
