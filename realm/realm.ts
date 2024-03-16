namespace $ {
	
	export class $hyoo_crus_realm extends $mol_object {
		
		lands = new $mol_wire_dict< $hyoo_crus_ref, $hyoo_crus_land >()
		
		@ $mol_mem
		yard() {
			return this.$.$hyoo_crus_yard.make({
				realm: $mol_const( this ),
			})
		}
		
		home() {
			return this.Land( this.$.$hyoo_crus_auth.current().lord() )
		}
		
		@ $mol_action
		land_grab( preset = $hyoo_crus_rank_public ) {
			
			const knight = this.$.$hyoo_crus_auth.grab()
			const colony = ( $mol_wire_sync( $hyoo_crus_land ) as typeof $hyoo_crus_land ).make({
				auth: ()=> knight,
			})
			
			if( !preset.get.includes( $hyoo_crus_ref( '' ) ) ) {
				colony.encrypted( true )
			}
			
			const self = this.$.$hyoo_crus_auth.current().lord()
			for( const ref of preset.get ) colony.give( ref ?? self, $hyoo_crus_rank.get )
			for( const ref of preset.add ) colony.give( ref ?? self, $hyoo_crus_rank.add )
			for( const ref of preset.mod ) colony.give( ref ?? self, $hyoo_crus_rank.mod )
			for( const ref of preset.law ) colony.give( ref ?? self, $hyoo_crus_rank.law )
			
			const land = this.Land( colony.ref() )
			land.apply_unit_trust( colony.delta_unit() )
			
			return land
		}
		
		@ $mol_mem_key
		Land( ref: $hyoo_crus_ref ): $hyoo_crus_land {
			
			let land = this.lands.get( ref )
			if( land ) return land
			
			land = $hyoo_crus_land.make({
				realm: $mol_const( this ),
				ref: $mol_const( ref ),
			})
			
			this.lands.set( ref, land )
			return land
			
		}
		
		Node< Node extends typeof $hyoo_crus_node > ( ref: $hyoo_crus_ref, Node: Node ) {
			const land = this.Land( $hyoo_crus_ref_land( ref ) )
			return land.Node( Node ).Item( $hyoo_crus_ref_head( ref ) )
		}
		
		@ $mol_action
		apply_pack( pack: $hyoo_crus_pack ) {
			
			const { lands, rocks } = pack.parts()
			
			for( const land of Reflect.ownKeys( lands ) as $hyoo_crus_ref[] ) {
				
				const errors = this.Land( land ).apply_unit( lands[ land ].units ).filter( Boolean )
				
				for( const error of errors ) this.$.$mol_log3_warn({
					place: `${this}.apply_pack()`,
					message: error,
					hint: 'Send it to developer',
				})
				
			}
			
			for( const [ hash, rock ] of rocks ) {
				if( !rock ) continue
				this.$.$hyoo_crus_mine.save( rock )
			}

		}
		
		// @ $mol_mem_key
		// key_public( lord: bigint ) {
		// 	const key = this.Land( lord ).Area( 0 ).pass.get( Number( lord >> 16n ) )?.auth()
		// 	return key ? $mol_crypto_key_public.from( key ) : null
		// }
		
		// @ $mol_mem_key
		// secret_mutual( dest: bigint ) {
			
		// 	const key = this.key_public( dest )
		// 	if( !key ) return null
			
		// 	return $mol_wire_sync( $mol_crypto_secret ).derive(
		// 		this.$.$hyoo_crus_auth.current().toString(),
		// 		key.toString(),
		// 	)
			
		// }
		
	}
	
}
