import { edit } from './edit';
import { save } from './save';

const { registerBlockType } = wp.blocks;

export function faqBlock() {

  /**
   * Register new block - FAQ
   */
  registerBlockType('gutenberg-plus/faq-block', {
    title: 'FAQ',
    description: 'FAQ block with clickable heading and collapsible content',
    icon: 'insert-before',
    category: 'gutenberg-plus',
    attributes: {
      heading: {
        type: 'string'
      },
      headingTag: {
        type: 'string',
        default: 'p'
      }
    },

    edit: edit,

    save: save
  });
}