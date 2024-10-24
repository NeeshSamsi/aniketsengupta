// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Content for Author documents
 */
interface AuthorDocumentData {
  /**
   * Name field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * Designation field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.designation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField
}

/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Name field in *Category*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: category.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >

/**
 * Content for Disclaimer documents
 */
interface DisclaimerDocumentData {
  /**
   * Heading field in *Disclaimer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: disclaimer.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField

  /**
   * Content field in *Disclaimer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: disclaimer.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField
}

/**
 * Disclaimer document from Prismic
 *
 * - **API ID**: `disclaimer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DisclaimerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DisclaimerDocumentData>,
    "disclaimer",
    Lang
  >

type PageDocumentDataSlicesSlice =
  | TeamSlice
  | OfficesSlice
  | CallToActionSlice
  | PublicationsSlice
  | AboutSlice
  | AccordionInfoSlice
  | HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>

type PublicationDocumentDataSlicesSlice = RichTextSlice

/**
 * Content for Publication documents
 */
interface PublicationDocumentData {
  /**
   * Title field in *Publication*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField

  /**
   * Author field in *Publication*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author">

  /**
   * Category field in *Publication*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">

  /**
   * Slice Zone field in *Publication*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PublicationDocumentDataSlicesSlice> /**
   * Meta Title field in *Publication*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: publication.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Publication*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: publication.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Publication*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: publication.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Publication document from Prismic
 *
 * - **API ID**: `publication`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublicationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PublicationDocumentData>,
    "publication",
    Lang
  >

/**
 * Item in *Site Settings → Navigation Links*
 */
export interface SettingsDocumentDataNavLinksItem {
  /**
   * Link field in *Site Settings → Navigation Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navLinks[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * Call to Action field in *Site Settings → Navigation Links*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navLinks[].isCta
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  isCta: prismic.BooleanField
}

/**
 * Content for Site Settings documents
 */
interface SettingsDocumentData {
  /**
   * Navigation Links field in *Site Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navLinks[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navLinks: prismic.GroupField<Simplify<SettingsDocumentDataNavLinksItem>>

  /**
   * LinkedIn field in *Site Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField

  /**
   * Phone Number field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField

  /**
   *  Email Address field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField

  /**
   * Copyright Message field in *Site Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField
}

/**
 * Site Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >

export type AllDocumentTypes =
  | AuthorDocument
  | CategoryDocument
  | DisclaimerDocument
  | PageDocument
  | PublicationDocument
  | SettingsDocument

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Section ID field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Image field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Heading field in *About → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Content field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>

/**
 * Item in *PraticeAreas → Default → Primary → Practice Areas*
 */
export interface AccordionInfoSliceDefaultPrimaryPracticeAreasItem {
  /**
   * Title field in *PraticeAreas → Default → Primary → Practice Areas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.practiceAreas[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Description field in *PraticeAreas → Default → Primary → Practice Areas*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.practiceAreas[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Primary content in *PraticeAreas → Default → Primary*
 */
export interface AccordionInfoSliceDefaultPrimary {
  /**
   * Section ID field in *PraticeAreas → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Subheading field in *PraticeAreas → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *PraticeAreas → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *PraticeAreas → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField

  /**
   * Practice Areas field in *PraticeAreas → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: accordion_info.default.primary.practiceAreas[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  practiceAreas: prismic.GroupField<
    Simplify<AccordionInfoSliceDefaultPrimaryPracticeAreasItem>
  >
}

/**
 * Default variation for PraticeAreas Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordionInfoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AccordionInfoSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *PraticeAreas*
 */
type AccordionInfoSliceVariation = AccordionInfoSliceDefault

/**
 * PraticeAreas Shared Slice
 *
 * - **API ID**: `accordion_info`
 * - **Description**: AccordionInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AccordionInfoSlice = prismic.SharedSlice<
  "accordion_info",
  AccordionInfoSliceVariation
>

/**
 * Item in *CallToAction → Default → Primary → CTA Buttons*
 */
export interface CallToActionSliceDefaultPrimaryCtasItem {
  /**
   * Button field in *CallToAction → Default → Primary → CTA Buttons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.ctas[].button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField
}

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Section ID field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Subheading field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Paragraph field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField

  /**
   * CTA Buttons field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.ctas[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  ctas: prismic.GroupField<Simplify<CallToActionSliceDefaultPrimaryCtasItem>>
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Paragraph field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField

  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.bgImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bgImage: prismic.ImageField<never>
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>

/**
 * Item in *Offices → Default → Primary → Offices*
 */
export interface OfficesSliceDefaultPrimaryOfficesItem {
  /**
   * Map Screenshot field in *Offices → Default → Primary → Offices*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.offices[].mapImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mapImage: prismic.ImageField<never>

  /**
   * City field in *Offices → Default → Primary → Offices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.offices[].city
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  city: prismic.KeyTextField

  /**
   * Address field in *Offices → Default → Primary → Offices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.offices[].address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField

  /**
   * Google Maps Link field in *Offices → Default → Primary → Offices*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.offices[].mapsLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  mapsLink: prismic.LinkField
}

/**
 * Primary content in *Offices → Default → Primary*
 */
export interface OfficesSliceDefaultPrimary {
  /**
   * Section ID field in *Offices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Subheading field in *Offices → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Offices → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Offices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField

  /**
   * Offices field in *Offices → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.offices[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  offices: prismic.GroupField<Simplify<OfficesSliceDefaultPrimaryOfficesItem>>

  /**
   * Email field in *Offices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField

  /**
   * Phone Number field in *Offices → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: offices.default.primary.number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number: prismic.KeyTextField
}

/**
 * Default variation for Offices Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OfficesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OfficesSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Offices*
 */
type OfficesSliceVariation = OfficesSliceDefault

/**
 * Offices Shared Slice
 *
 * - **API ID**: `offices`
 * - **Description**: Offices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OfficesSlice = prismic.SharedSlice<"offices", OfficesSliceVariation>

/**
 * Primary content in *Publications → Default → Primary*
 */
export interface PublicationsSliceDefaultPrimary {
  /**
   * Section ID field in *Publications → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publications.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Subheading field in *Publications → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: publications.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Publications → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: publications.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Publications → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: publications.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField
}

/**
 * Default variation for Publications Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PublicationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PublicationsSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Publications*
 */
type PublicationsSliceVariation = PublicationsSliceDefault

/**
 * Publications Shared Slice
 *
 * - **API ID**: `publications`
 * - **Description**: Publications
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PublicationsSlice = prismic.SharedSlice<
  "publications",
  PublicationsSliceVariation
>

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>

/**
 * Item in *Team → Default → Primary → Team Members*
 */
export interface TeamSliceDefaultPrimaryMembersItem {
  /**
   * Portrait field in *Team → Default → Primary → Team Members*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].portrait
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  portrait: prismic.ImageField<never>

  /**
   * Name field in *Team → Default → Primary → Team Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * Designation field in *Team → Default → Primary → Team Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[].designation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField
}

/**
 * Primary content in *Team → Default → Primary*
 */
export interface TeamSliceDefaultPrimary {
  /**
   * Section ID field in *Team → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.sectionID
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionID: prismic.KeyTextField

  /**
   * Subheading field in *Team → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subheading: prismic.TitleField

  /**
   * Heading field in *Team → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * description field in *Team → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField

  /**
   * Team Members field in *Team → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<Simplify<TeamSliceDefaultPrimaryMembersItem>>
}

/**
 * Default variation for Team Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Team*
 */
type TeamSliceVariation = TeamSliceDefault

/**
 * Team Shared Slice
 *
 * - **API ID**: `team`
 * - **Description**: Team
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AuthorDocument,
      AuthorDocumentData,
      CategoryDocument,
      CategoryDocumentData,
      DisclaimerDocument,
      DisclaimerDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PublicationDocument,
      PublicationDocumentData,
      PublicationDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavLinksItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      AccordionInfoSlice,
      AccordionInfoSliceDefaultPrimaryPracticeAreasItem,
      AccordionInfoSliceDefaultPrimary,
      AccordionInfoSliceVariation,
      AccordionInfoSliceDefault,
      CallToActionSlice,
      CallToActionSliceDefaultPrimaryCtasItem,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      OfficesSlice,
      OfficesSliceDefaultPrimaryOfficesItem,
      OfficesSliceDefaultPrimary,
      OfficesSliceVariation,
      OfficesSliceDefault,
      PublicationsSlice,
      PublicationsSliceDefaultPrimary,
      PublicationsSliceVariation,
      PublicationsSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      TeamSlice,
      TeamSliceDefaultPrimaryMembersItem,
      TeamSliceDefaultPrimary,
      TeamSliceVariation,
      TeamSliceDefault,
    }
  }
}
