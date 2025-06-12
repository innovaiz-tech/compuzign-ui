import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import "./styles.css";
import { Link } from "react-router-dom";


const AccordionComponent = ({ accordionContent, index }) => (
	<Accordion.Root className="AccordionRoot" type="single" collapsible>
		<Accordion.Item className="AccordionItem" value={`index-${index}`}>
			<AccordionTrigger>
				<span className="font-medium">{accordionContent.title}</span>
			</AccordionTrigger>
			<div className="pl-2">
				{accordionContent.dropdown.map((item, itemIndex) => (
					<Link to={item.href} key={`content-${itemIndex}`} className="block">
						<AccordionContent>
							<div className="py-2.5 px-2 hover:bg-accent/10 transition-colors duration-200 border-l border-accent/20 my-1 rounded-r-md">
								<span className="text-sm">{item.label}</span>
							</div>
						</AccordionContent>
					</Link>
				))}
			</div>
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

export default AccordionComponent;
