from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, AuthenticationForm


UserModel = get_user_model()


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = UserModel
        fields = ('email','username',)
    
    
class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = UserModel
        fields = ('email','username',)


class LoginForm(AuthenticationForm):
    error_messages = {
        'invalid_login': (
            "Hibás felhasználónév és/vagy jelszó!"
        )
    }