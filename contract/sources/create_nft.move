module soultix_addr::create_events {
    use aptos_token::token;
    use aptos_token::collection;
    use std::bcs;
    use std::error;
    use std::signer;
    use std::string::{Self, String};
    use std::vector;
    use std::string::String;

    use std::option::{Self, Option};
    use aptos_framework::object::{Self, ConstructorRef, Object};
    
    #[event]
    struct CreateNewEvent has drop, store {
        creator: address,
        event_name: utf8,
        description: utf8
    }

    // Ticket Marketplace resource
    struct TicketMarketplace has key {
        // Table of all events
        events: Table<u64, TicketEvent>,
        
        // Counter for generating unique event IDs
        next_event_id: u64
    }

    // Initialize the ticket marketplace
    public entry fun initialize_marketplace(admin: &signer) {
        let marketplace = TicketMarketplace {
            events: table::new(),
            next_event_id: 1
        };
        move_to(admin, marketplace);
    }

    // Error codes
    const E_NOT_INITIALIZED: u64 = 1;
    const E_INSUFFICIENT_FUNDS: u64 = 2;
    const E_TICKETS_SOLD_OUT: u64 = 3;
    const E_INVALID_TICKET: u64 = 4;
    const E_NOT_AUTHORIZED: u64 = 5;

    public fun create_event_collection(event_creator: &signer, event_name: String, description: String, max_supply: u64, uri: String){
        let royalty = option::none();

        collection::create_fixed_collection(
            creator,
            string::utf8(b"collection description"),
            max_supply,
            string::utf8(b"collection name"),
            royalty,
            uri
        );
        
        let event = CreateNewEvent {
            creator: event_creator,
            event_name: event_name,
            description: description
        };
        // Emit the event just defined.
        0x1::event::emit(event);
    }

    public fun mint_token_object(
        creator: &signer,
        collection: String,
        description: String,
        name: String,
        uri: String,
        // property_keys: vector<String>,
        // property_types: vector<String>,
        // property_values: vector<vector<u8>>,
    ) {
        let royalty = option::none();
        token::create_named_token(
            creator,
            string::utf8(b"collection name"),
            string::utf8(b"token description"),
            string::utf8(b"token description"),
            royalty,
            uri,
        );
    }

}