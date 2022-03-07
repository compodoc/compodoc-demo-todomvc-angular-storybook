import { Story, Meta } from '@storybook/angular/types-6-0';
import { CompodocComponent } from './compodoc.component';

export default {
    title: 'CompodocComponent',
    component: CompodocComponent,
} as Meta;

const Template: Story<CompodocComponent> = (args: CompodocComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
