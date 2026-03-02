"""Shared pytest fixtures for backend tests"""
import pytest
import requests
import os

@pytest.fixture
def api_client():
    """Shared requests session"""
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session

@pytest.fixture
def base_url():
    """Get base URL from environment"""
    return os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
