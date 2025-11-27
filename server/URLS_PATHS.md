# Auth URL quick links
- Login: http://localhost:8000/accounts/login/
- Signup: http://localhost:8000/accounts/signup/

## Allauth URL patterns
| Path | Name | Notes |
| --- | --- | --- |
| http://localhost:8000/accounts/login/ | account_login | Standard login page |
| http://localhost:8000/accounts/logout/ | account_logout | Logout endpoint |
| http://localhost:8000/accounts/inactive/ | account_inactive | Shown for inactive accounts |
| http://localhost:8000/accounts/signup/ | account_signup | Registration page |
| http://localhost:8000/accounts/reauthenticate/ | account_reauthenticate | Re-auth flow for sensitive actions |
| http://localhost:8000/accounts/email/ | account_email | Manage email addresses |
| http://localhost:8000/accounts/confirm-email/ | account_email_verification_sent | Confirmation sent notice |
| http://localhost:8000/accounts/password/change/ | account_change_password | Change password |
| http://localhost:8000/accounts/password/set/ | account_set_password | Set password (no current password) |
| http://localhost:8000/accounts/password/reset/ | account_reset_password | Start password reset |
| http://localhost:8000/accounts/login/code/confirm/ | account_confirm_login_code | Confirm login code |
| http://localhost:8000/accounts/confirm-email/<key>/ | account_confirm_email | Regex: `^confirm-email/(?P<key>[-:\\w]+)/$` |
| http://localhost:8000/accounts/password/reset/key/done/ | account_reset_password_from_key_done | Reset complete |
| http://localhost:8000/accounts/password/reset/key/<uidb36>-<key>/ | account_reset_password_from_key | Regex: `^password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$` |
| http://localhost:8000/accounts/password/reset/done/ | account_reset_password_done | Reset request submitted |
