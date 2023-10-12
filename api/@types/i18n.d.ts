/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "responses": {
        "errors": {
            "birth_date": {
                "invalid": string;
            };
            "email": {
                "blacklisted": string;
                "malformed": string;
                "invalid": string;
                "used": string;
                "are_used": string;
                "not_found": string;
                "verified": string;
                "unverified": string;
                "token": {
                    "invalid": string;
                };
            };
            "entity": {
                "not_found": string;
            };
            "field": {
                "missing": string;
                "unexpected": string;
                "invalid": string;
            };
            "file": {
                "infected": string;
                "invalid_mime_type": string;
                "no_file": string;
                "not_found_on_disk": string;
                "undefined_mime_type": string;
                "unauthorized": string;
            };
            "id": {
                "invalid": string;
                "invalids": string;
                "not_found": string;
                "not_founds": string;
            };
            "image": {
                "invalid_aspect_ratio": string;
            };
            "jwt": {
                "invalid": string;
                "expired": string;
                "unknown": string;
            };
            "password": {
                "mismatch": string;
                "weak": string;
            };
            "permission": {
                "invalid": string;
                "not_found_on_user": string;
                "already_on_user": string;
            };
            "promotion": {
                "logo_not_found": string;
            };
            "role": {
                "name_used": string;
            };
            "user": {
                "cannot_update_birth_date_or_name": string;
                "no_picture": string;
                "no_banner": string;
            };
        };
        "success": {
            "deleted": string;
        };
    };
    "templates": {
        "common": {
            "politeness": string;
            "signature": string;
            "questions": string;
            "info": string;
        };
        "email_changed": {
            "subject": string;
            "title": string;
            "body": {
                "text": string;
                "link": {
                    "text": string;
                    "href": string;
                };
            };
        };
        "register_common": {
            "subject": string;
            "title": string;
            "body": {
                "text": string;
            };
        };
        "register_user": {
            "body": {
                "text": string;
                "link": {
                    "text": string;
                    "href": string;
                };
                "remark": string;
            };
        };
        "register_user_by_admin": {
            "body": {
                "text": string;
                "password": string;
            };
        };
    };
};
export type I18nPath = Path<I18nTranslations>;
