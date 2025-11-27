from django.urls import path

from . import views

app_name = "app"

urlpatterns = [
    path("", views.landing_page, name="landing"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("profile/", views.profile, name="profile"),
    path("analysis/", views.analysis, name="analysis"),
    path("reports/", views.reports, name="reports"),
]
