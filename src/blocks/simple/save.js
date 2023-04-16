/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<div {...useBlockProps.save()}>
			<section className="splide">
				<div className="splide__track">
					<div {...innerBlocksProps} className={`${innerBlocksProps.className} splide__list`} />
				</div>
			</section>
		</div>
	);
}
