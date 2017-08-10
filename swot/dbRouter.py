from django.conf import settings

class SwotDBRouter(object):
    """
    A router to control app1 db operations
    """
    def db_for_read(self, model, **hints):
        if not settings.DATABASES.has_key('db_swot'):
            return None
        if model._meta.app_label == 'swot':
            return 'db_swot'
        return None

    def db_for_write(self, model, **hints):
        if not settings.DATABASES.has_key('db_swot'):
            return None
        if model._meta.app_label == 'swot':
            return 'db_swot'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        if not settings.DATABASES.has_key('db_swot'):
            return None
        if obj1._meta.app_label == 'swot' or obj2._meta.app_label == 'swot':
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if not settings.DATABASES.has_key('db_swot'):
            return None
        if db == 'db_swot':
            return app_label == 'swot'
        return None