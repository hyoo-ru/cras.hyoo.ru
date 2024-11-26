namespace $ {
	
	/** Any Thing */
	export class $hyoo_crus_flex_thing extends $hyoo_crus_dict.with({
		Kind: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_flex_kind ), // Schema of fields
		Title: $hyoo_crus_atom_str,
	}) {}
	
	/** Atomic Ref to any Thing */
	export class $hyoo_crus_flex_thing_ref extends $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_flex_thing ) {}
	
	/** Kind of Thing */
	export class $hyoo_crus_flex_kind extends $hyoo_crus_flex_thing.with({
		Props: $hyoo_crus_list_ref_to( ()=> $hyoo_crus_flex_prop ),
	}) {}
	
	/** Property of Kind */
	export class $hyoo_crus_flex_prop extends $hyoo_crus_flex_thing.with( {
		/** Key to store value */
		Key: $hyoo_crus_atom_str,
		/** Type of value */
		Type: $hyoo_crus_atom_str,
		/** Target kind */
		Target: $hyoo_crus_atom_ref_to( () => $hyoo_crus_flex_kind ),
		/** Variants of values */
		Enum: $hyoo_crus_atom_ref_to( () => $hyoo_crus_list_vary ),
		/** Base value */
		Base: $hyoo_crus_atom_vary,
	}) {}
	
	/** All schemas in one place */
	export class $hyoo_crus_flex_domain extends $hyoo_crus_flex_thing.with({
		Kinds: $hyoo_crus_list_ref_to( ()=> $hyoo_crus_flex_kind ),
		Props: $hyoo_crus_list_ref_to( ()=> $hyoo_crus_flex_prop ),
		Types: $hyoo_crus_list_str,
	}) {
		
		@ $mol_action
		static ensure( land: $hyoo_crus_land ): $hyoo_crus_flex_domain {
			
			const domain = land.Data( this )
			if( domain.units().length ) return domain
			// if( land.auth().lord() !== $hyoo_crus_ref( 'JinYqktA_qNR7zÆe8' ) ) return domain
			
			domain.Title(null)!.val( 'Base Domain' )
			domain.Types(null)!.items_vary([ 'vary', 'enum', 'bool', 'int', 'real', 'str', 'ref', 'time', 'dict', 'text', 'list' ])
			
			const Thing = domain.Kinds(null)!.make()
			const Kind = domain.Kinds(null)!.make()
			const Prop = domain.Kinds(null)!.make()
			const Domain = domain.Kinds(null)!.make()
			
			Kind.Title(null)!.val( 'Kind' )
			Prop.Title(null)!.val( 'Property' )
			Thing.Title(null)!.val( 'Thing' )
			Domain.Title(null)!.val( 'Domain' )
			
			Kind.Kind(null)!.remote( Kind )
			Prop.Kind(null)!.remote( Kind )
			Thing.Kind(null)!.remote( Kind )
			Domain.Kind(null)!.remote( Kind )
			domain.Kind(null)!.remote( Domain )
			
			const thing_kind = domain.Props(null)!.make()
			const thing_title = domain.Props(null)!.make()
			const kind_props = domain.Props(null)!.make()
			const prop_key = domain.Props(null)!.make()
			const prop_type = domain.Props(null)!.make()
			const prop_target = domain.Props(null)!.make()
			const prop_enum = domain.Props(null)!.make()
			const prop_base = domain.Props(null)!.make()
			const domain_kinds = domain.Props(null)!.make()
			const domain_props = domain.Props(null)!.make()
			const domain_types = domain.Props(null)!.make()
			
			thing_kind.Key(null)!.val( 'Kind' )
			thing_title.Key(null)!.val( 'Title' )
			kind_props.Key(null)!.val( 'Props' )
			prop_key.Key(null)!.val( 'Key' )
			prop_type.Key(null)!.val( 'Type' )
			prop_target.Key(null)!.val( 'Target' )
			prop_enum.Key(null)!.val( 'Enum' )
			prop_base.Key(null)!.val( 'Base' )
			domain_kinds.Key(null)!.val( 'Kinds' )
			domain_props.Key(null)!.val( 'Props' )
			domain_types.Key(null)!.val( 'Types' )
			
			thing_kind.Title(null)!.val( 'Kind' )
			thing_title.Title(null)!.val( 'Title' )
			kind_props.Title(null)!.val( 'Props' )
			prop_key.Title(null)!.val( 'Key' )
			prop_type.Title(null)!.val( 'Type' )
			prop_target.Title(null)!.val( 'Target kind' )
			prop_enum.Title(null)!.val( 'Variants' )
			prop_base.Title(null)!.val( 'Default' )
			domain_kinds.Title(null)!.val( 'Kinds' )
			domain_props.Title(null)!.val( 'Props' )
			domain_types.Title(null)!.val( 'Types' )
			
			thing_kind.Kind(null)!.remote( Prop )
			thing_title.Kind(null)!.remote( Prop )
			kind_props.Kind(null)!.remote( Prop )
			prop_key.Kind(null)!.remote( Prop )
			prop_type.Kind(null)!.remote( Prop )
			prop_target.Kind(null)!.remote( Prop )
			prop_enum.Kind(null)!.remote( Prop )
			prop_base.Kind(null)!.remote( Prop )
			domain_kinds.Kind(null)!.remote( Prop )
			domain_props.Kind(null)!.remote( Prop )
			domain_types.Kind(null)!.remote( Prop )
			
			Kind.Props(null)!.add( thing_kind.ref() )
			Prop.Props(null)!.add( thing_kind.ref() )
			Thing.Props(null)!.add( thing_kind.ref() )
			Domain.Props(null)!.add( thing_kind.ref() )
			
			Kind.Props(null)!.add( thing_title.ref() )
			Prop.Props(null)!.add( thing_title.ref() )
			Thing.Props(null)!.add( thing_title.ref() )
			Domain.Props(null)!.add( thing_title.ref() )
			
			Kind.Props(null)!.add( kind_props.ref() )
			
			Prop.Props(null)!.add( prop_key.ref() )
			Prop.Props(null)!.add( prop_type.ref() )
			Prop.Props(null)!.add( prop_target.ref() )
			Prop.Props(null)!.add( prop_enum.ref() )
			Prop.Props(null)!.add( prop_base.ref() )
			
			Domain.Props(null)!.add( domain_kinds.ref() )
			Domain.Props(null)!.add( domain_props.ref() )
			Domain.Props(null)!.add( domain_types.ref() )
			
			thing_kind.Type(null)!.val( 'ref' )
			thing_title.Type(null)!.val( 'str' )
			kind_props.Type(null)!.val( 'list' )
			prop_key.Type(null)!.val( 'str' )
			prop_type.Type(null)!.val( 'enum' )
			prop_target.Type(null)!.val( 'ref' )
			prop_enum.Type(null)!.val( 'ref' )
			prop_base.Type(null)!.val( 'vary' )
			domain_kinds.Type(null)!.val( 'list' )
			domain_props.Type(null)!.val( 'list' )
			domain_types.Type(null)!.val( 'list' )
			
			thing_kind.Target(null)!.remote( Thing )
			kind_props.Target(null)!.remote( Prop )
			prop_target.Target(null)!.remote( Kind )
			prop_enum.Target(null)!.remote( Thing )
			prop_base.Target(null)!.remote( Thing )
			domain_kinds.Target(null)!.remote( Kind )
			domain_props.Target(null)!.remote( Prop )
			
			thing_kind.Enum(null)!.vary( domain.Kinds()!.ref() )
			kind_props.Enum(null)!.vary( domain.Props()!.ref() )
			prop_type.Enum(null)!.vary( domain.Types()!.ref() )
			prop_target.Enum(null)!.vary( domain.Kinds()!.ref() )
			prop_enum.Enum(null)!.vary( domain.ref() )
			
			thing_title.Base(null)!.vary( '' )
			thing_kind.Base(null)!.vary( Thing.ref() )
			prop_type.Base(null)!.vary( 'vary' )
			prop_target.Base(null)!.vary( Thing.ref() )

			return domain
		}
		
	}
	
}
