from django.shortcuts import render

def landing_page(request):
    return render(request, 'app/landing.html')

def dashboard(request):
    return render(request, 'app/dashboard.html')

def profile(request):
    return render(request, 'app/profile.html')

def analysis(request):
    return render(request, 'app/analysis.html')

def reports(request):
    return render(request, 'app/reports.html')
