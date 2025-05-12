import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { Link } from "react-router-dom";


const AccordionDemo = ({ accordionContent, index }) => (
	<Accordion.Root className="AccordionRoot" type="single" collapsible>
		<Accordion.Item className="AccordionItem" value={`index-${index}`}>
			<AccordionTrigger>{accordionContent.title}</AccordionTrigger>
			{accordionContent.dropdown.map((item, index) => (
				<Link to={item.href} key={`content-${index}`}>
					<AccordionContent>
						<div className="py-2 hover:bg-gray-200">
							{item.label}
						</div>
					</AccordionContent>
				</Link>
			))}
		</Accordion.Item>
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

export default AccordionDemo;
