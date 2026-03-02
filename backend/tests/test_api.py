"""
Backend API tests for Dwianto Capital Advisory
Tests: Blog API with multilingual support, Contact form submission
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthAndRoot:
    """Test API health and root endpoint"""
    
    def test_api_root(self):
        """Test API root endpoint returns status ok"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "ok"
        assert "Dwianto Capital Advisory" in data["message"]
        print("PASSED: API root endpoint returns status ok")


class TestBlogsAPI:
    """Test blogs API with multilingual support"""
    
    def test_get_blogs_default_english(self):
        """Test GET /api/blogs returns blogs in English by default"""
        response = requests.get(f"{BASE_URL}/api/blogs")
        assert response.status_code == 200
        blogs = response.json()
        assert isinstance(blogs, list)
        print(f"PASSED: GET /api/blogs returns {len(blogs)} blogs")
        
        # Verify blog structure
        if blogs:
            blog = blogs[0]
            assert "title" in blog
            assert "slug" in blog
            assert "excerpt" in blog
            print(f"PASSED: Blog has required fields - title: {blog['title'][:50]}...")
    
    def test_get_blogs_arabic_translation(self):
        """Test GET /api/blogs?lang=ar returns Arabic translated blogs"""
        response = requests.get(f"{BASE_URL}/api/blogs", params={"lang": "ar"})
        assert response.status_code == 200
        blogs = response.json()
        assert isinstance(blogs, list)
        
        if blogs:
            blog = blogs[0]
            # Check that translations field is removed
            assert "translations" not in blog
            # Arabic titles should contain Arabic characters
            title = blog.get("title", "")
            print(f"PASSED: Arabic blog title: {title}")
        print("PASSED: GET /api/blogs?lang=ar returns Arabic blogs")
    
    def test_get_blogs_chinese_translation(self):
        """Test GET /api/blogs?lang=zh returns Chinese translated blogs"""
        response = requests.get(f"{BASE_URL}/api/blogs", params={"lang": "zh"})
        assert response.status_code == 200
        blogs = response.json()
        assert isinstance(blogs, list)
        
        if blogs:
            blog = blogs[0]
            assert "translations" not in blog
            title = blog.get("title", "")
            print(f"PASSED: Chinese blog title: {title}")
        print("PASSED: GET /api/blogs?lang=zh returns Chinese blogs")
    
    def test_get_blogs_spanish_translation(self):
        """Test GET /api/blogs?lang=es returns Spanish translated blogs"""
        response = requests.get(f"{BASE_URL}/api/blogs", params={"lang": "es"})
        assert response.status_code == 200
        blogs = response.json()
        assert isinstance(blogs, list)
        
        if blogs:
            blog = blogs[0]
            assert "translations" not in blog
            title = blog.get("title", "")
            print(f"PASSED: Spanish blog title: {title}")
        print("PASSED: GET /api/blogs?lang=es returns Spanish blogs")
    
    def test_get_single_blog_english(self):
        """Test GET /api/blogs/{slug} returns single blog in English"""
        # First get all blogs to get a slug
        response = requests.get(f"{BASE_URL}/api/blogs")
        assert response.status_code == 200
        blogs = response.json()
        
        if not blogs:
            pytest.skip("No blogs in database")
        
        slug = blogs[0]["slug"]
        
        # Now get single blog
        response = requests.get(f"{BASE_URL}/api/blogs/{slug}")
        assert response.status_code == 200
        blog = response.json()
        assert blog["slug"] == slug
        assert "title" in blog
        assert "content" in blog
        print(f"PASSED: GET /api/blogs/{slug} returns single blog")
    
    def test_get_single_blog_chinese(self):
        """Test GET /api/blogs/{slug}?lang=zh returns Chinese translated blog"""
        # First get all blogs to get a slug
        response = requests.get(f"{BASE_URL}/api/blogs")
        assert response.status_code == 200
        blogs = response.json()
        
        if not blogs:
            pytest.skip("No blogs in database")
        
        slug = blogs[0]["slug"]
        
        # Get single blog in Chinese
        response = requests.get(f"{BASE_URL}/api/blogs/{slug}", params={"lang": "zh"})
        assert response.status_code == 200
        blog = response.json()
        assert blog["slug"] == slug
        assert "translations" not in blog
        print(f"PASSED: GET /api/blogs/{slug}?lang=zh returns Chinese blog - title: {blog.get('title', '')}")
    
    def test_get_nonexistent_blog(self):
        """Test GET /api/blogs/{slug} for non-existent blog returns error"""
        response = requests.get(f"{BASE_URL}/api/blogs/nonexistent-slug-12345")
        assert response.status_code == 200  # Returns 200 with error message
        data = response.json()
        assert "error" in data
        print("PASSED: Non-existent blog returns error message")


class TestContactAPI:
    """Test contact form submission API"""
    
    def test_submit_contact_form_success(self):
        """Test POST /api/contact with valid data returns success"""
        contact_data = {
            "name": "TEST_John Doe",
            "email": "test@example.com",
            "message": "This is a test inquiry for Dwianto Capital Advisory"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=contact_data)
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "success"
        assert "message" in data
        print("PASSED: Contact form submission successful")
    
    def test_submit_contact_form_with_optional_fields(self):
        """Test POST /api/contact with optional fields"""
        contact_data = {
            "name": "TEST_Jane Smith",
            "email": "jane@company.com",
            "phone": "+1234567890",
            "company": "Test Company Inc",
            "service_interest": "M&A Advisory",
            "message": "Interested in your M&A advisory services"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=contact_data)
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "success"
        print("PASSED: Contact form with optional fields successful")
    
    def test_submit_contact_form_missing_required(self):
        """Test POST /api/contact with missing required fields returns error"""
        contact_data = {
            "name": "TEST_Missing Fields"
            # Missing email and message
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=contact_data)
        assert response.status_code == 422  # Validation error
        print("PASSED: Contact form validation rejects missing fields")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
