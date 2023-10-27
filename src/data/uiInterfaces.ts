interface ButtonLinkProps {
    label: string;
    link: string;
    isSolid: boolean;
}

interface SectionDescriptionProps {
    subHeading: string;
    heading: string;
    description: string;
    points: string[];
}

interface ChecklistProps {
    point: string;
}

interface HeadingProps {
    subHeading: string;
    heading: string;
    isCentered: boolean;
}

interface StepCardProps {
    icon: string;
    heading: string;
    description: string;
}