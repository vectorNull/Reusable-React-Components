import Accordion from "../components/Accordion";


function AccordionPage() {
	const items = [
		{
			id: 'fcfc8667-b7bb-4399-8d37-6e8b5ca82d7c',
			label: "Header 1",
			content: "phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio"
		},
		{
			id: "a1fb94d2-a1c4-498b-8abd-6b4a1563a7e0",
			label: "Header 2",
			content: "sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam"
		},
		{
			id: "5d165741-a907-4da7-bea4-2db7573a8e6f",
			label: "Header 3",
			content: "massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla"
		}
	]
	
	return <Accordion items={items} />
}

export default AccordionPage;